import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Tests for GifExpertApp', () => {

    test('Must render the component properly', () => {
        
        const wrapper = shallow( <GifExpertApp /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('Must display list of categories', () => {

        const categories = ['Programming', 'Valorant'];
        const wrapper = shallow( <GifExpertApp defaultCategories = { categories }/> );
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });

})