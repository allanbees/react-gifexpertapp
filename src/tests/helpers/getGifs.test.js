import { getGifs } from "../../helpers/getGifs";

describe('Tests with getGifs fetch helper', () => { 

    test('Must fetch 10 elements', async () => {

        const gifs = await getGifs( 'Spain' );
        expect( gifs.length ).toBe( 10 );

    });

    test('Must return empty array when no parameter is passed', async () => {

        const gifs = await getGifs( '' );
        expect( gifs.length ).toBe( 0 );

    });


})