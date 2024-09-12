import {DurationLikeObject} from "luxon/src/duration";

export class DateHelper {
  static getTimeFromString = (value: string): DurationLikeObject => {
    const time: string[] = value.split(':');
    return {
      hours: parseInt(time[0]),
      minutes: parseInt(time[1]),
      seconds: time[2] ? parseInt(time[2]) : 0
    };
  }
}
