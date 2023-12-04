import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <header className='nav-bkg'>
      <nav>
        <div className='nav-links'>
          <Link
            activeClass='active'
            smooth
            spy
            to='presentation'
            className='link'
            href=''
          >
            Portfolio
          </Link>
          <Link
            activeClass='active'
            smooth
            spy
            to='projects'
            className='link'
            href=''
          >
            Projets
          </Link>
          <Link
            activeClass='active'
            smooth
            spy
            to='contact'
            className='link'
            href=''
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav
