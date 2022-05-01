// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Rawad Habib" />

            <div className='header__content'>
                <h1>Hi, I'm Rawad</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:rawadhabibeng@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;