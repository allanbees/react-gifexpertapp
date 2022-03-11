import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('Tests of <AddCategory />', () => { 

    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories = { setCategories } />);

    test('Must render correctly', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Must change the text box', () => {

        const input = wrapper.find('input');
        const value = 'Hello world';

        // the second argument is the event we want to happen, in this case we need to send a string
        input.simulate('change', { target: { value }});
        expect( wrapper.find('p').text().trim() ).toBe( value ); 

    });



})