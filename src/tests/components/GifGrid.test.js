import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Tests for <GifGrid />', () => {
    const category = 'Programming';
    
    test('Must render the component properly', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category = { category } />);
        expect( wrapper ).toMatchSnapshot();

    });

    test('Must display items when gifs are loaded with useFetchGifs', () => {

        const gifs = [{
            id: 'ABC', 
            url: 'https://reactjs.org/',
            title: 'title'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category = { category } />);
        
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    });

});
