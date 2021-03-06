import React from "react";
import styles from "./ForecastDayCard.module.css";

const ForecastDayCard = props => {
  const { date, tempUnit, times } = props;
  return (
    <div className={styles.Container}>
      <h4 className={styles.ForecastDate}>{date}</h4>
      <table>
        <tbody className={styles.ForecastDetail}>
          {times.map(time => {
            let regex = /(.{3})(?=(\.png))/;
            let icon = regex.exec(time.icon)[0];
            const iconSrc = require(`../../../common/icons/${icon}.svg`);
            return (
              <tr key={time.time}>
                <td>{time.time}</td>
                <td>
                  <img src={iconSrc} alt={`${time.time} weather icon`} />
                </td>
                <td>{time.temp + " " + tempUnit}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ForecastDayCard;
