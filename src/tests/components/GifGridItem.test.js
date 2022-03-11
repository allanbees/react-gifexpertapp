import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test GifGridItem component', () => { 
    
    const title = "A title";
    const url = "https://localhost/image.jpg";
    const wrapper = shallow( <GifGridItem title = { title } url = { url } /> );

    test('Needs to render GifGridItem properly', () => { 

        expect( wrapper ).toMatchSnapshot();

    });

    test('Check if <p> tag has the title', () => { 

        const p = wrapper.find( 'p' );
        expect( p.text().trim() ).toBe( title );

    });

    test('Check if <img> tag has the src = url and alt attributes', () => { 

        const img = wrapper.find( 'img' );
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });

    test('Must have class animate_fadeIn', () => { 

        const div = wrapper.find( 'div' );
        expect( div.prop( 'className' ).includes('animate__fadeIn') ).toBe( true );

    });

})