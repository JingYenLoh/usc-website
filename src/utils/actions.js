import {
  createEvent as createFirestoreEvent,
  getEvents as getFirestoreEvents,
  getEventsAfter as getFirestoreEventsAfter,
  getEventTypes as getFirestoreEventTypes,
  getSpaces as getFirestoreSpaces,
  watchEvents as watchFirestoreEvents
} from './firestoreClient'
import moment from 'moment'

export function createEvent(firestore, event, uid, callback) {
  createFirestoreEvent(firestore, event, uid, callback)
}

export function getEvents(firestore, month = null, spaceOnly = false, callback = () => {}) {
  getEventTypes(firestore)
  getSpaces(firestore)
  getFirestoreEvents(firestore, month, spaceOnly, callback)
  watchFirestoreEvents(firestore)
}

export function getUpcomingEvents(firestore, limit) {
  getEvents(firestore)
  getFirestoreEventsAfter(firestore, moment(), limit)
}

export function getEventTypes(firestore) {
  getFirestoreEventTypes(firestore)
}

export function getSpaces(firestore) {
  getFirestoreSpaces(firestore)
}
