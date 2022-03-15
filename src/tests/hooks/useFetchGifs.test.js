import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

// Remember that hooks can only be called inside functional components, which involves importing the testing library for react-hooks
describe('Tests for useFetchGifs hook', () => {

    test('Must return initial state', async () => { 

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Peaky Blinders' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    });

    test('Must return array of imgs and loading false', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Peaky Blinders' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe(false);

    });

})