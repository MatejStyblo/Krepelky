import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as FaIcons from 'react-icons/fa'

export const SidebarData = [
   {
      title: 'Domů',
      url: '/',
      cName: 'navLinks',
      icon: <AiIcons.AiOutlineHome />,
   },
   {
      title: 'Galerie',
      url: '/galerie',
      cName: 'navLinks',
      icon: <RiIcons.RiGalleryLine />,
   },
   {
      title: 'Produkty',
      url: '/produkty',
      cName: 'navLinks',
      icon: <FaIcons.FaEgg />,
   },
   {
      title: 'Kontakty',
      url: '/kontakty',
      cName: 'navLinks',
      icon: <AiIcons.AiFillContacts />,
   },
]
