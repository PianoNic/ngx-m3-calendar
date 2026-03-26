/*
 * Public API Surface of ngx-m3-calendar
 */

export { MatCalendarComponent } from './lib/ngx-m3-calendar';
export type {
  CalendarEvent,
  CalendarViewMode,
  CalendarLabels,
  CalendarDay,
  CalendarParticipant,
  NormalizedCalendarEvent,
  PositionedEvent,
  WorkHourSlot,
} from './lib/calendar-models';
export { DEFAULT_LABELS } from './lib/calendar-models';
export { CalendarUtilsService } from './lib/calendar-utils.service';
