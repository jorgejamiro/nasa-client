import { 
  Logo,
  Words,
  Header as ArwesHeader,
  Highlight,
  withStyles,
} from "arwes";
import { Link } from "react-router-dom";
import Clickable from "./Clickable";
import Centered from "./Centered";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tab, Tablist } from 'evergreen-ui';

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    lineHeight: "80px",
  },
  logo: {
    display: "inherit",
    marginTop: "15px",
  },
  nav: {
    display: "inherit",
  },
  banner: {
    display: "inherit",
    fontWeight: "bold",
    marginLeft: "10px",
    marginRight: "15px",
    fontSize: 28,
  },
  clickable: {
    fontSize: 21,
    "& i": {
      marginRight: theme.padding / 2,
      fontSize: 24,
    },
  },
  link: {
    color: theme.color.content,
    textDecoration: "none",
  },
  button: {
    padding: [0, theme.padding / 2],
  },
  langTab: {
    display: "inherit",
    marginLeft: '85px',
    marginTop: '25px'
  },
  langIcon: {
    display: "inherit",
    marginRight: '5px',
  },
  "@media (max-width: 800px)": {
    logo: {
      display: "none",
    },
    img: {
      display: "none",
    },
    banner: {
      display: "none",
    },
    button: {
      padding: [0, 8],
    },
    clickable: {
      fontSize: 16,
    }
  },
});

const Header = props => {
  const { classes, onNav, ...rest } = props;
  const [indexSelected, setIndexSelected] = useState(0);
  const tabsHeading = ['en', 'es'];
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
  };
  

  return <ArwesHeader animate>
    <Centered className={classes.root} {...rest}>
      <img src="/favicon.png" alt="" className={classes.img} style={{
        margin: "15px 10px 15px 0",
        height: "50px",
        width: "auto",
      }} />
      <Logo animate size={50} className={classes.logo} layer="header" />
      <Words animate className={classes.banner}>
        {t('headerWords')}
      </Words>
      <nav className={`${classes.nav}`}>
        <Clickable className={classes.clickable} onClick={onNav}>
          <Highlight className={classes.button} animate layer="header">
            <Link className={classes.link} to="/launch">
              <i className="material-icons">check_circle_outline</i>
              {t('Launch')}
            </Link>
          </Highlight>
        </Clickable>
        <Clickable className={classes.clickable} onClick={onNav}>
          <Highlight className={classes.button} animate layer="header">
            <Link className={classes.link} to="/upcoming">
            <i className="material-icons">update</i>{t('Upcoming')}</Link>
          </Highlight>
        </Clickable>
        <Clickable className={classes.clickable} onClick={onNav}>
          <Highlight className={classes.button} animate layer="header">
            <Link className={classes.link} to="/history">
            <i className="material-icons">history</i>{t('History')}</Link>
          </Highlight>
        </Clickable>
        <Tablist marginBottom={0} className={classes.langTab}>
          <div className={classes.langIcon}><i className="material-icons">language</i></div>
          {tabsHeading.map((tab, index) => (
              <Tab
                  key={tab}
                  isSelected={index === indexSelected}
                  appearance='secondary'
                  color='white'
                  backgroundColor='black'
                  fontSize='1rem'
                  onSelect={() => {
                      setIndexSelected(index);
                      changeLanguage(tab);
                  }}
              >
                  {tab}
              </Tab>
          ))}
        </Tablist>
      </nav>
    </Centered>
  </ArwesHeader>
};

export default withStyles(styles)(Header);