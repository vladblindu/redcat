import React from "react";
import {Link} from "react-router-dom";
// reactstrap components
import {
    Button,
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap"
import Logo from './../../../assets/app-id/logo.png'

export default function Header() {
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [collapseOut, setCollapseOut] = React.useState("");
    const [color, setColor] = React.useState("navbar-transparent");
    React.useEffect(() => {
        window.addEventListener("scroll", changeColor);
        return function cleanup() {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);
    const changeColor = () => {
        if (
            document.documentElement.scrollTop > 99 ||
            document.body.scrollTop > 99
        ) {
            setColor("bg-info");
        } else if (
            document.documentElement.scrollTop < 100 ||
            document.body.scrollTop < 100
        )
        {
            setColor("navbar-transparent");
        }
    }
    const toggleCollapse = () => {
        document.documentElement.classList.toggle("nav-open");
        setCollapseOpen(!collapseOpen);
    };
    const onCollapseExiting = () => {
        setCollapseOut("collapsing-out");
    };
    const onCollapseExited = () => {
        setCollapseOut("");
    };
    return (
        <Navbar className={"fixed-top"} color-on-scroll="100" expand="lg bg-dark">
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand to="/" id="navbar-brand" tag={Link}>
                        <div className='inline-block '>
                            <img src={Logo} alt='Logo' className='h-20 w-20'/>
                        </div>
                        <div className='inline-block'>
                            <span className='inline-block'>RED</span>
                            <span className='inline-block'>CAT</span>
                            <span className='inline-block'>STUDIOS</span>
                        </div>
                    </NavbarBrand>
                    <button
                        aria-expanded={collapseOpen}
                        className="navbar-toggler navbar-toggler"
                        onClick={toggleCollapse}
                    >
                        <span className="navbar-toggler-bar bar1"/>
                        <span className="navbar-toggler-bar bar2"/>
                        <span className="navbar-toggler-bar bar3"/>
                    </button>
                </div>
                <Collapse
                    className={"justify-content-end " + collapseOut}
                    navbar
                    isOpen={collapseOpen}
                    onExiting={onCollapseExiting}
                    onExited={onCollapseExited}
                >
                    <div className="navbar-collapse-header">
                        <Row>
                            <Col className="collapse-brand" xs="6">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    REDCAT STUDIOS
                                </a>
                            </Col>
                            <Col className="collapse-close text-right" xs="6">
                                <button
                                    aria-expanded={collapseOpen}
                                    className="navbar-toggler"
                                    onClick={toggleCollapse}
                                >
                                </button>
                            </Col>
                        </Row>
                    </div>
                    <Nav navbar>
                        <div className='p-4'>
                            <Link to={'/about'} className='text-white font-bold text-md lg:text-lg'>
                                ABOUT
                            </Link>
                        </div>
                        <div className='p-4'>
                            <Link to={'/clients'} className='text-white font-bold text-md lg:text-lg'>
                                CLIENTS
                            </Link>
                        </div>
                        <div className='p-4'>
                            <Link to={'/catalogue'} className='text-white font-bold text-md lg:text-lg'>
                                CATALOGUE
                            </Link>
                        </div>
                        <div className='p-4'>
                            <Link to={'/login'} className='text-red-700 font-bold text-md lg:text-lg'>
                                LOGIN
                            </Link>
                        </div>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}
