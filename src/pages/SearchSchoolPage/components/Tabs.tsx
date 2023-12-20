import type { DragEndEvent } from '@dnd-kit/core'
import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core'
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import React, { useState, useRef, useEffect } from 'react'
import { Tabs, TabsProps } from 'antd'
// import EChartsMap from './EchartsMap'
import dynamic from 'next/dynamic'

const EChartsMap = dynamic(() => import('./EchartsMap'),   { ssr: false })
import eventBus from '@/utils/eventBus'
import UniversityDetail from './UniversityDetail'

let initialItems = [
  {
    label: '地图数据',
    children: <EChartsMap />,
    key: '1',
    closable: false,
  },
  // { label: 'Tab 1', children: 'Content of Tab 1', key: '2' },
  // { label: 'Tab 2', children: 'Content of Tab 2', key: '3' },
]

type TargetKey = React.MouseEvent | React.KeyboardEvent | string

interface DraggableTabPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  'data-node-key': string
}

const DraggableTabNode = ({ className, ...props }: DraggableTabPaneProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: props['data-node-key'],
    })

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform && { ...transform, scaleX: 1 }),
    transition,
    cursor: 'move',
  }

  return React.cloneElement(props.children as React.ReactElement, {
    ref: setNodeRef,
    style,
    ...attributes,
    ...listeners,
  })
}

type NonNullable<T> = Exclude<T, null | undefined> // 从T中移除null和undefined
type Tabs = NonNullable<TabsProps['items']> // 得到的类型是Tabs[]
// Todo: 受不了了，typescript也太麻烦了，一直没法直接直接导入Tabs，晚上问问丁子

const App: React.FC = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key)
  const [tabItems, setItems] = useState<Tabs>([]) //Todo: 这里的代码会在listener回调时执行，为啥？
  console.log('executed!')
  const newTabIndex = useRef(0)

  useEffect(() => {
    const cachedTabs = sessionStorage.getItem('schoolTabs') // 注意这得到的是个字符串，需要转换
    if (cachedTabs && cachedTabs !== '[]') {
      // console.log('还是进来了？！')
      initialItems = []
      const tabInfos = JSON.parse(cachedTabs)
      // 复现一个自定义组件比较复杂，这里选择了一种比较愚蠢的写法
      tabInfos.forEach(
        (tabInfo: { label: string; children: any; key: string }) => {
          if (tabInfo.label === '地图数据') {
            initialItems.push({
              label: tabInfo.label,
              children: <EChartsMap />,
              key: tabInfo.key,
              closable: false,
            })
          } else {
            initialItems.push({
              label: tabInfo.label,
              children: (
                <UniversityDetail
                  name={tabInfo.children.props.name}
                  description={tabInfo.children.props.description}
                  motto={tabInfo.children.props.motto}
                  logoUrl={tabInfo.children.props.logoUrl}
                  backgroundUrl={tabInfo.children.props.backgroundUrl}
                  tags={tabInfo.children.props.tags}
                  website={tabInfo.children.props.website}
                  dominant={tabInfo.children.props.dominant}
                  created={tabInfo.children.props.created}
                  location={tabInfo.children.props.location}
                />
              ),
              key: tabInfo.key,
              closable: true,
            })
          }
        },
      )
    }
    const newTabIndexString = sessionStorage.getItem('newTabIndex')
    if (newTabIndexString) {
      newTabIndex.current = parseInt(newTabIndexString)
    }
    setItems(initialItems)
  }, [])

  useEffect(() => {
    eventBus.subscribe('universityClicked', add)
    return () => {
      eventBus.unsubscribe('universityClicked', add)
    }
  }, []) //Todo: 这里有个问题，如果把这个useEffect改成只执行一次，就会失效

  useEffect(() => {
    console.log('tabItems stored', tabItems)
    sessionStorage.setItem('schoolTabs', JSON.stringify(tabItems))
    sessionStorage.setItem('newTabIndex', newTabIndex.current.toString())
  }, [tabItems])

  const sensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  })

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setItems(prev => {
        const activeIndex = prev.findIndex(i => i.key === active.id)
        const overIndex = prev.findIndex(i => i.key === over?.id)
        return arrayMove(prev, activeIndex, overIndex)
      })
    }
  }

  const onEdit = (targetKey: TargetKey, action: 'add' | 'remove') => {
    if (action === 'add') {
      add('')
    } else {
      remove(targetKey)
    }
  }

  const remove = (targetKey: TargetKey) => {
    const targetIndex = tabItems.findIndex(pane => pane.key === targetKey)
    const newPanes = tabItems.filter(pane => pane.key !== targetKey)
    if (newPanes.length && targetKey === activeKey) {
      const { key } =
        newPanes[
          targetIndex === newPanes.length ? targetIndex - 1 : targetIndex
        ]
      setActiveKey(key)
    }
    setItems(newPanes)
  }

  const add = (item: any) => {
    const newActiveKey = `newTab${newTabIndex.current++}`
    setItems(prev => {
      return [
        ...prev,
        {
          label: item.name,
          children: (
            <UniversityDetail
              name={item.name}
              description={item.description}
              motto={item.mooto}
              logoUrl={item.picture.large}
              backgroundUrl={item.background}
              tags={item.tags}
              website={item.website}
              dominant={item.dominant}
              created={item.created}
              location={item.location}
            />
          ),
          key: newActiveKey,
          closable: true,
        },
      ]
    })
    setActiveKey(newActiveKey)
  }

  const onChange = (key: string) => {
    console.log(key)
    setActiveKey(key)
  }

  return (
    <Tabs
      hideAdd
      onChange={onChange}
      onEdit={onEdit}
      activeKey={activeKey}
      items={tabItems}
      type="editable-card"
      // style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      style={{ height: '100%' }}
      renderTabBar={(tabBarProps, DefaultTabBar) => (
        // <div style={{display: "flex", alignItems:"start", width:"100%", overflow:"auto"}}>
        <div>
          <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
            {/* <div style={{position: 'fixed'}}> */}
            {/* </div> */}
            <SortableContext
              items={tabItems.map(i => i.key)}
              strategy={horizontalListSortingStrategy}
            >
              <DefaultTabBar {...tabBarProps}>
                {node => (
                  <DraggableTabNode {...node.props} key={node.key}>
                    {node}
                  </DraggableTabNode>
                )}
              </DefaultTabBar>
            </SortableContext>
          </DndContext>
        </div>
      )}
    />
  )
}

export default App
