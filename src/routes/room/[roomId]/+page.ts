import type { PageLoadEvent } from "./$types";

/** @type {import('./$types').PageLoad} */
export async function load(context: PageLoadEvent) {
	const { params } = context;

	const roomId = params.roomId;
	
    /** whatever code/logic we want */

    return {
        roomId
    }
	
}