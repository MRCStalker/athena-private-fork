import * as alt from 'alt-shared';
import { VEHICLE_CLASS } from '../enums/vehicleTypeFlags';

export interface Dealership {
    /**
     * The name of this dealership.
     * @type {string}
     * @memberof Dealership
     */
    name: string;

    /**
     * The position in a 3D space where this dealership can be interacted with.
     * @type {alt.IVector3}
     * @memberof Dealership
     */
    position: alt.IVector3;

    /**
     * The position in a 3D space where the dealership vehicles spawn.
     * @type {alt.IVector3}
     * @memberof Dealership
     */
    vehiclePosition: alt.IVector3;

    /**
     * A position that is 0 - 360 to rotate the vehicle.
     * @type {number}
     * @memberof Dealership
     */
    vehicleHeading: number;

    /**
     * The vehicle to use for the preview vehicle.
     * @type {string}
     * @memberof Dealership
     */
    vehiclePreview: string;

    /**
     * The class of vehicles to show at this dealership.
     * @type {VEHICLE_CLASS}
     * @memberof Dealership
     */
    class: VEHICLE_CLASS;

    /**
     * The number of vehicles in stock at this dealership.
     * **PROBABLY NOT IMPLEMENTED**
     * @type {number}
     * @memberof Dealership
     */
    stock: number;

    /**
     * Should this dealership have a blip?
     * Useful when multiple vehicles types are in one area.
     * @type {boolean}
     * @memberof Dealership
     */
    createBlip?: boolean;
}
