import React from "react";
import {List, Space} from "antd";

const CommonSense: React.FC = () => {
    let titleStyle:React.CSSProperties={
        fontWeight: '600',
        fontSize: '36px',
        marginTop: '30px',
        marginLeft: '12px',
        marginBottom: '30px'
    }
    return (
        <div style={{backgroundColor: '#fff', margin: '20px'}}>
            <div style={titleStyle}>
                高考常识
            </div>
            <Space style={{display: 'flex', justifyContent: "space-between"}}>
                <div style={{
                    width: '260px',
                    height: '320px',
                    backgroundColor: '#0f0',
                    display: "flex",
                    justifyContent: "space-between",
                    // alignItems: "center"
                }}>
                    <div style={{}}>
                        <div style={{width: '100px', height: '30px', backgroundColor: '#1cc3ff', textAlign: "center"}}>招生章程</div>
                        <div>
                            <List
                                size={'small'}
                                split={false}
                                itemLayout="horizontal"
                                dataSource={[
                                    "招生章程知多少",
                                    "章程中包含的重要信息"
                                ]}
                                renderItem={(item, index) => (
                                    <List.Item style={{fontSize: '16px', fontWeight: '500'}}>
                                        {item}
                                    </List.Item>
                                )}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{width: '100px', height: '30px', backgroundColor: '#1cc3ff', textAlign: "center"}}>招生章程</div>
                        <div>
                            <List
                                size={'small'}
                                split={false}
                                itemLayout="horizontal"
                                dataSource={[
                                    "全国高等学校名单",
                                    '"双一流"建设高校及学科名单'
                                ]}
                                renderItem={(item, index) => (
                                    <List.Item style={{fontSize: '16px', fontWeight: '500'}}>
                                        {item}
                                    </List.Item>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </Space>
        </div>
    )
}

export default CommonSense;
