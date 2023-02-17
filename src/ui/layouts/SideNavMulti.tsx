import { useState, useRef, useEffect } from 'react'
import { Button } from 'primereact/button'
import { StyleClass } from 'primereact/styleclass'
import { Ripple } from 'primereact/ripple'
import { ScrollPanel } from 'primereact/scrollpanel'
import { useMediaQuery } from 'react-responsive'
import { Link, useLocation } from 'react-router-dom'

interface SideNavProps {
  style?: { active: string; hover: string }
  brand?: { bg?: string; height?: string; logo?: any }
  layout?: { navWidth: string; tabWidth: string }
  menu?: {
    bg?: string
    active?: string
    hover?: string
    items: { name: string; icon: string; link: string }[]
    content: Object | any
  }
  bottomMenu?: JSX.Element[] | JSX.Element
  topbarNav?: JSX.Element[] | JSX.Element
  children: any
}

const SideNavMulti = ({
  brand = { bg: 'bg-primary', height: '50', logo: <i className="pi pi-sitemap text-2xl"></i> },
  layout = { navWidth: '60', tabWidth: '200' },
  navStyles = { bg: 'surface-ground', active: 'bg-primary', hover: 'bg-primary' },
  menu = {
    items: [{ name: 'dashboard', icon: 'pi-home', link: 'dashboard' }],
    content: {
      dashboard: {label: 'Dashboard', menu: 'Dashboard'}
    }
  },
  bottomMenu = <></>,
  topbarNav = <></>,
  children
}) => {
  const btnRef1 = useRef(null)
  const [activeTab, setActiveTab] = useState(null)
  const isLg = useMediaQuery({ query: '(min-width: 992px)' })
  const isLgMl = +layout.navWidth + +layout.tabWidth + 1
  const location = useLocation();

  useEffect(() => {
    const paths = location.pathname.split('/')
    paths[2] ? setActiveTab(paths[2]) : setActiveTab(menu.items[0].name)
  },[])

  return (
    <>
      <div className={`min-h-screen flex relative lg:static`}>
        <div
          id="app-sidebar"
          className="h-full lg:h-auto hidden lg:block flex-shrink-0 absolute lg:fixed left-0 top-0 bottom-0 z-1  w-full md:w-auto"
        >
          <div className="flex h-full">
            <div
              className={`flex flex-column h-full ${navStyles.bg} flex-shrink-0 select-none`}
              style={{ width: `${layout.navWidth}px` }}
            >
              <div
                className={`flex align-items-center justify-content-center flex-shrink-0 ${brand.bg}`}
                style={{ height: `${brand.height}px` }}
              >
                {brand.logo}
              </div>
              <div className="overflow-y-auto">
                <ul className="list-none p-2">
                  <>
                    {menu.items.map((item) => {
                      return (
                        <li className="mb-2" key={item.name}>
                          <Link
                            to={item.link}
                            onClick={() => setActiveTab(item.name)}
                            className={`p-ripple flex align-items-center cursor-pointer p-2 lg:justify-content-center 
                            hover:${navStyles.hover} border-round transition-duration-150 transition-colors
                            ${activeTab === item.name && navStyles.active}`}
                          >
                            <i className={`pi ${item.icon} text-lg`}></i>
                            <Ripple />
                          </Link>

                          <Ripple />
                        </li>
                      )
                    })}
                  </>
                </ul>
              </div>
              <div className="mt-auto">{bottomMenu}</div>
            </div>
            <div
              className="flex flex-column surface-section flex-shrink-0 flex-grow-1 md:flex-grow-0"
              style={{ width: `${layout.tabWidth}px` }}
            >
              <div className="justify-content-end flex lg:hidden">
                <StyleClass
                  nodeRef={btnRef1}
                  selector="#app-sidebar"
                  leaveToClassName="hidden"
                  leaveActiveClassName="fadeoutleft"
                >
                  <Button ref={btnRef1} icon="pi pi-times" className="p-button-rounded p-button-text p-button-plain" />
                </StyleClass>
              </div>
              <div className="flex-auto">

                <ScrollPanel className="p-0 lg:h-screen">
                  {activeTab && menu.content[activeTab].menu}
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </ScrollPanel>
              </div>
            </div>
          </div>
        </div>
        <div
          className="min-h-screen flex flex-column relative flex-auto"
          style={{ marginLeft: isLg ? `${isLgMl}px` : 0 }}
        >
          {topbarNav}
          {children}
        </div>
      </div>
    </>
  )
}

export default SideNavMulti
