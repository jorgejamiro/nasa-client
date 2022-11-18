import { useMemo } from "react";
import { Appear, Table, Paragraph } from "arwes";
import { useTranslation } from 'react-i18next';
import { Tab, Tablist } from 'evergreen-ui';
import { t } from "i18next";

const History = props => {
  const tableBody = useMemo(() => {
    return props.launches?.filter((launch) => !launch.upcoming)
      .map((launch) => {
        return <tr key={String(launch.flightNumber)}>
          <td>
            <span style={
              {color: launch.success ? "greenyellow" : "red"}
            }>█</span>
          </td>
          <td>{launch.flightNumber}</td>
          <td>{new Date(launch.launchDate).toDateString()}</td>
          <td>{launch.mission}</td>
          <td>{launch.rocket}</td>
          <td>{launch.customers?.join(", ")}</td>
        </tr>;
      });
  }, [props.launches]);

  return <article id="history">
    <Appear animate show={props.entered}>
      <Paragraph>{t('historyParagraph')}</Paragraph>
      <Table animate>
        <table style={{tableLayout: "fixed"}}>
          <thead>
            <tr>
              <th style={{width: "2rem"}}></th>
              <th style={{width: "3rem"}}>{t('Num.')}</th>
              <th style={{width: "9rem"}}>{t('Date')}</th>
              <th>{t('Mission')}</th>
              <th style={{width: "7rem"}}>{t('Rocket')}</th>
              <th>{t('Customers')}</th>
            </tr>
          </thead>
          <tbody>
            {tableBody}
          </tbody>
        </table>
      </Table>
    </Appear>
  </article>;
}
  
export default History;