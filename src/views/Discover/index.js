import React, { memo } from "react"
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { DiscoverWrapper,HeaderMenus } from "./style";
import { discoverMenu  } from "@/common/localData.js";
export default memo(function Discover(props) {
    const {route}  =props
    return (
        <DiscoverWrapper>
        <div className="top">
          <HeaderMenus className="wrap-v1">
            {
              discoverMenu.map((item, index) => {
                return (
                  <div className="item" key={item.title}>
                    <NavLink to={item.link}>{item.title}</NavLink>
                  </div>
                )
              })
            }
          </HeaderMenus>
        </div>
        {
            renderRoutes(route.routes)
        }
        </DiscoverWrapper>
    )
})