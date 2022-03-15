import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('Tests of <AddCategory />', () => { 

    // const setCategories = () => {};
    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = { setCategories } />);
    });

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


    test('Must not post info on submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('Must call setCategories and clean the text box', () => { 

        const value = 'Peaky Blinders';

        const input = wrapper.find('input');
        input.simulate('change', { target: { value }});

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        
        expect( wrapper.find('input').prop('value') ).toBe('');

    });

})