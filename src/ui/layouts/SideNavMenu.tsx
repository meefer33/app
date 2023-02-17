import { NavLink } from 'react-router-dom'

const SideNavMenu = ({title,links}) => {
  const linkStyle =
    'flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3'

  return (
    <div className='select-none'>
      <div className='surface-hover p-3 flex align-items-center text-900'>
        <span className='font-medium'>{title}</span>
      </div>
      <ul className='list-none p-2 m-0'>
        {links.map(({name,link}) => 
        <li className='flex overflow-hidden' key={name}>
        <NavLink
          className={({ isActive }) => (isActive ? `text-primary ${linkStyle}` : `${linkStyle}`)}
          to={link}
        >
          <span className='font-medium'>{name}</span>
        </NavLink>
      </li>
        )}
      </ul>
    </div>
  )
}

export default SideNavMenu
