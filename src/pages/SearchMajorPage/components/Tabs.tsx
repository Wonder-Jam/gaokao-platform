import type { DragEndEvent } from '@dnd-kit/core'
import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { Tabs } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { eventBus } from '../utils/eventBus'
import MajorInfo from './MajorInfo'

const initialItems = [
  {
    label: '哲学',
    children: (
      <MajorInfo
        id={1}
        name={'哲学'}
        description={
          '专业代码：010101  |  修业年限：四年  |  授予学位：哲学学士  |  男女比例：40:60'
        }
        detailed_introduction={
          '培养目标：本专业培养具有一定马克思主义哲学理论素养和系统的专业基础知识，有进一步 培养潜质的哲学专门人才，以及能在国家机关、文教事业、新闻出版、企业等部门从事实际工作的 应用型、复合型高级专门人才。\n\n培养要求：本专业学生主要学习马克思主义的基本理论与历史，以及社会科学、自然科学和 思维科学的基础知识，接受中西方哲学的基本理论和发展线索的系统教育，以及创造性思维的培 养和业务能力的训练。\n\n毕业生应获得以下几方面的知识和能力：\n\n1．比较系统地掌握马克思主义哲学、中国哲学和西方哲学的理论和历史；\n\n2．具有一定的社会科学、人文科学、自然科学、思维科学的相关知识；\n\n3．掌握哲学学科的基本研究方法、治学方法和相应的社会调查能力；\n\n4．了解国内外哲学界最重要的理论前沿和发展动态；\n\n5．了解国内外最重大的实践问题和发展动态；\n\n6．具有分析和解决社会现实问题的初步能力。\n\n主干学科：哲学。\n\n核心课程：哲学概论、马克思主义哲学原理、马克思主义哲学史、中国哲学史、西方哲学史、现 代西方哲学、科学技术哲学、伦理学、宗教学、美学、逻辑学、心理学、中外哲学原著导读、马克思主 义哲学原著导读等。\n\n主要实践性教学环节：社会实习、社会调查、社会公益活动等，一般安排10周左右。\n\n修业年限：四年。\n\n授予学位：哲学学士。\n\n'
        }
        subject={'不限/物理/历史/思政/思政+历史'}
        direction={'马克思主义哲学、中国哲学、外国哲学、哲学'}
        course={
          '哲学概论、马克思主义哲学原理、中国哲学史、西方哲学史、科学技术哲学、伦理学、宗教学、美学、逻辑学、心理学、中外哲学原著导读等。'
        }
        celebrity={'老子、庄子、孔子、苏格拉底、柏拉图、歌德等。'}
        picture={{
          large: undefined,
          medium: undefined,
          thumbnail: undefined,
        }}
        introduction={{
          what: '',
          learn: undefined,
          do: undefined,
        }}
        loading={false}
      />
    ),
    key: '1',
    closable: false,
  },
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

    eventBus.subscribe('majorClicked', addTabListener)

    return () => {
      eventBus.unsubscribe('majorClicked', addTabListener)
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
          <MajorInfo
            id={item.id}
            name={item.name}
            picture={item.picture}
            motto={item.motto}
            loading={item.loading}
            introduction={item.introduction}
            detailed_introduction={item.detailed_introduction}
            subject={item.subject}
            ratio={item.ratio}
            direction={item.direction}
            course={item.course}
            celebrity={item.celebrity}
            description={item.description}
            website={item.website}
            // background={item.background}
            // tags={item.tags}
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
            {/* <div style={{position: 'fixed'}}> */}
            {/* </div> */}
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
