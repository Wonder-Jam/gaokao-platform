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
import { Tabs, Divider } from 'antd'
import EChartsMap from './EchartsMap'
import { eventBus } from '../utils/eventBus'
import UniversityDetail from './UniversityDetail'
import type { UniversityDetailProps } from '../type'

const initialItems = [
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

const App: React.FC = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key)
  const [items, setItems] = useState(initialItems)
  const newTabIndex = useRef(0)

  useEffect(() => {
    const addTabListener = (data: any) => {
      add(data)
      console.log('Received message in Tabs:', data)
      // 例如，可以使用你的 Tabs 组件的状态来添加新的 Tab
    }

    eventBus.subscribe('universityClicked', addTabListener)

    return () => {
      eventBus.unsubscribe('universityClicked', addTabListener)
    }
  })

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
    const targetIndex = items.findIndex(pane => pane.key === targetKey)
    const newPanes = items.filter(pane => pane.key !== targetKey)
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
    setItems([
      ...items,
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
          />
        ),
        key: newActiveKey,
        closable: true,
      },
    ])
    setActiveKey(newActiveKey)
  }

  const onChange = (key: string) => {
    setActiveKey(key)
  }

  return (
    <Tabs
      hideAdd
      onChange={onChange}
      onEdit={onEdit}
      activeKey={activeKey}
      items={items}
      type="editable-card"
      // style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      style={{ height: '100%' }}
      renderTabBar={(tabBarProps, DefaultTabBar) => (
        // <div style={{display: "flex", alignItems:"start", width:"100%", overflow:"auto"}}>
        <div>
          <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
            <SortableContext
              items={items.map(i => i.key)}
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
