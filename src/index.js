import React, { useState } from 'react';
import './index.less';
// import { Icon } from 'antd-mobile';

function SelectorTab(props) {

    const menu = [
        [
            { label: "净贡献完成率", value: "" },
            { label: "考核收入完成率", value: "" },
            { label: "（经营费用+外包成本）完成率", value: "" },
        ],
        [
            { label: "大区排名", value: "" },
            { label: "机构排名", value: "" },
        ]
    ]

    //设置默认值
    const initState = menu.map(item => item[0])
    /**
     * @description 选择结果
     * @returns  [value1,value2,....]
     */
    const [result, setResult] = useState(initState);
    /**
     * @description 选项
     */
    const [selector, setSelector] = useState(menu[0]);
    /**
     * @description 显示选项卡
     */
    const [show, setShow] = useState(false);

    const [curIndex, setCurIndex] = useState(0);

    //点击菜单
    function clickMenu(item, index) {
        console.log(curIndex)
        if (show && item[0].label === selector[0].label) {
            setShow(false);
        } else {
            setShow(true);
        }
        setCurIndex(index);
        setSelector(item);
    }
    //选择
    function selectItem(item) {
        result[curIndex] = item;
        setResult(result);
        setShow(false);
    }

    return (
        <div><div className="select-tab-container">
            <div className="select-tab-wrapper">
                {menu.map((item, index) => (
                    <div onClick={clickMenu.bind(this, item, index)} key={index} className="select-tab-item">
                        {result[index].label}
                        {' '}
                        {/* <Icon type="down" className={`select-tab-rotate ${show && curIndex === index ? "select-tab-icon" : ""}`} size="xxs" /> */}
                    </div>
                )
                )}
                {props.children}
            </div>
            <div className={`select-tab-mengban  ${show ? 'select-tab-mbactived' : ''}`}></div>
            <ul className={`select-tab-selector ${show ? 'select-tab-actived' : ''}`}>
                {selector.map((item, index) => (
                    <li onClick={selectItem.bind(this, item)} key={index}>

                        {/* 已选中 */}
                        {
                            item.label === result[curIndex].label
                                ? <>
                                    <span className="base-color">{item.label}</span>
                                    {/* <span><Icon className="base-color" type="check" size="xxs"/></span> */}
                                </>
                                : <span>{item.label}</span>
                        }
                    </li>
                ))}
            </ul>
        </div>

        </div>
        
    );
}

export default SelectorTab;
