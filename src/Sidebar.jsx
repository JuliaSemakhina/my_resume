import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { sublinks } from './data';
import { useGlobalContext} from './context';

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? 'sidebar-wrapper show' : "sidebar-wrapper"}`}>
    <div className='sidebar'>

      <button className='close-btn' onClick={closeSidebar} >
        <FaTimes />
      </button>

      <div className='sidebar-links'>
      {sublinks.map((item, index)=>{
        const {page, links} = item;
        return (
          <article key={index}>
          <h4>{page}</h4>
          <div className='sidebar-sublinks'>
                        {links.map((link, index)=>{
                const { label, icon, url } = link;
                return (
                  <a key={index} href={url} onClick={closeSidebar}>
                  {icon}{label} 
                  </a>
                );
            })}
          </div>

        </article>
        );
      })}
      </div>
      <div className="sprite-sheet__logo">
</div>
    </div>

    </aside>
  );
};

export default Sidebar;
