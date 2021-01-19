import React, { memo } from 'react'
import { NavLink } from "react-router-dom";
import { HeaderLinks } from "@/common/localData";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { Input } from 'antd';
import { SearchOutlined} from "@ant-design/icons";
export default memo(function AppFooter() {


    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    {/* logo */}
                    <NavLink to="/" className="logo sprite_01">

                    </NavLink>
                    {/* 头部路由点击部分 */}
                    <div className="select_list">
                        {
                            HeaderLinks.map((item, index) => {
                                return (
                                    <NavLink exact key={item.title} className="select_item" to={item.link}>{item.title}
                                        <i className="icon sprite_01"></i>
                                    </NavLink>

                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台" prefix={<SearchOutlined />}></Input>
                    <div className="center">创作者中心</div>
                    <div className="login">登录</div>
                </HeaderRight>
            </div>
            <div className="divider">

            </div>
        </HeaderWrapper>
    )
})
