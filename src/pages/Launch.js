import { useMemo } from "react";
import { Appear, Button, Loading, Paragraph } from "arwes";
import { useTranslation } from 'react-i18next';

import Clickable from "../components/Clickable";

const Launch = props => {
  const { t } = useTranslation();
  const selectorBody = useMemo(() => {
    return props.planets?.map(planet => 
      <option value={planet.keplerName} key={planet.keplerName}>{planet.keplerName}</option>
    );
  }, [props.planets]);

  const today = new Date().toISOString().split("T")[0];

  return <Appear id="launch" animate show={props.entered}>
    <Paragraph>{t('launchParagraph1')}</Paragraph>
    <Paragraph>{t('launchParagraph2')}</Paragraph>
    <ul>
      <li>{t('launchLi1')}</li>
      <li>{t('launchLi2')}</li>
    </ul>

    <form onSubmit={props.submitLaunch} style={{display: "inline-grid", gridTemplateColumns: "auto auto", gridGap: "10px 20px"}}>
      <label htmlFor="launch-day">{t('Launch Date')}</label>
      <input type="date" id="launch-day" name="launch-day" min={today} max="2040-12-31" defaultValue={today} />
      <label htmlFor="mission-name">{t('Mission Name')}</label>
      <input type="text" id="mission-name" name="mission-name" />
      <label htmlFor="rocket-name">{t('Rocket Type')}</label>
      <input type="text" id="rocket-name" name="rocket-name" defaultValue="Explorer IS1" />
      <label htmlFor="planets-selector">{t('Destination Exoplanet')}</label>
      <select id="planets-selector" name="planets-selector">
        {selectorBody}
      </select>
      <Clickable>
        <Button animate 
          show={props.entered} 
          type="submit" 
          layer="success" 
          disabled={props.isPendingLaunch}>
          {t('launchButton')}
        </Button>
      </Clickable>
      {props.isPendingLaunch &&
        <Loading animate small />
      }
    </form>
  </Appear>
};

export default Launch;