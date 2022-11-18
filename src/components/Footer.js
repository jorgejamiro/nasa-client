import { Footer as ArwesFooter, Paragraph } from "arwes";
import { useTranslation } from 'react-i18next';

import Centered from "./Centered";

const Footer = () => {
  const { t } = useTranslation();

  return <ArwesFooter animate>
    <Centered>
      <Paragraph style={{ fontSize: 14, margin: "10px 0" }}>
        {t('footerParagraph')}
      </Paragraph>
    </Centered>
  </ArwesFooter>
};

export default Footer;
