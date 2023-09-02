import {
    type EntitySubscriberInterface,
    EventSubscriber,
    type InsertEvent, type RecoverEvent,
    type RemoveEvent,
    type SoftRemoveEvent, type UpdateEvent
} from "typeorm";
import {useDatabaseStores} from "@/stores/database-stores";
import * as DbUtils from "@/data/database/utils/database-utils";

@EventSubscriber()
export class EntityListener implements EntitySubscriberInterface {

    private dbStore = useDatabaseStores();

    afterInsert(event: InsertEvent<any>): Promise<any> | void {
        if (event.entity === undefined) {
            console.warn('event.entity is undefined');
            return;
        }

        const entityType = event.entity.constructor;
        this.dbStore.updateStatus(entityType);

        // if (this.dbStore.platform === 'web') {
        //     DbUtils.saveDatabase();
        // }
    }

    afterRemove(event: RemoveEvent<any>): Promise<any> | void {
        if (event.entity === undefined) {
            console.warn('event.entity is undefined');
            return;
        }

        const entityType = event.entity.constructor;
        this.dbStore.updateStatus(entityType);

        // if (this.dbStore.platform === 'web') {
        //     DbUtils.saveDatabase();
        // }
    }

    afterSoftRemove(event: SoftRemoveEvent<any>): Promise<any> | void {
        if (event.entity === undefined) {
            console.warn('event.entity is undefined');
            return;
        }

        const entityType = event.entity.constructor;
        this.dbStore.updateStatus(entityType);

        // if (this.dbStore.platform === 'web') {
        //     DbUtils.saveDatabase();
        // }
    }

    afterRecover(event: RecoverEvent<any>): Promise<any> | void {
        if (event.entity === undefined) {
            console.warn('event.entity is undefined');
            return;
        }

        const entityType = event.entity.constructor;
        this.dbStore.updateStatus(entityType);

        // if (this.dbStore.platform === 'web') {
        //     DbUtils.saveDatabase();
        // }
    }

    afterUpdate(event: UpdateEvent<any>): Promise<any> | void {

    }
}
