import CounterComponent from '@/components/CounterComponent';
import { shallowMount } from '@vue/test-utils';

describe('Counter Component Test', () => {
  let wrapper;
  let counterParagraph;
  let counterDefault;

  beforeEach(() => {
    wrapper = shallowMount(CounterComponent);
    counterParagraph = wrapper.find('[counter-id="counter"]');
  });

  it('read counter default value', () => {
    counterDefault = wrapper.props('start');

    expect(counterParagraph.text()).toBe(`${counterDefault} people`);
  });

  it('should to match with snapshot', () => {
    // expect(wrapper.html()).toMatchSnapshot();
    // Si la prueba falla por la diferencia de snapshot, pero el cambio en tu componente
    // sí es válido, vuelve a correr la prueba con la bandera -u para que actualice el
    // snapshot: npm run test:unit -u
  });

  it('title should to have default value', () => {
    const subtitle = wrapper.find('h1');
    expect(subtitle.exists()).toBe(true); // or toBeTruthy();
    expect(subtitle.text()).toBe('Counter');
  });

  it('counter should to have 100 as default value', () => {
    // const paragraphs = wrapper.findAll('p');

    expect(counterParagraph.text()).toBe('100 people');
    // paragraphs.forEach(p => {
    //   expect(Number(p.text())).toEqual(100);
    // });
  });

  it('increase button has to increment counter value by one', async () => {
    const increaseButton = wrapper.find('[button-type="increase"]');

    await increaseButton.trigger('click');
    expect(counterParagraph.text()).toBe('101 people');
  });

  it('decrease button has to decrement counter value by one', async () => {
    const decreaseButton = wrapper.find('[button-type="decrease"]');

    await decreaseButton.trigger('click');
    await decreaseButton.trigger('click');
    expect(counterParagraph.text()).toBe('98 people');
  });

  it('should to show title', () => {
    const title = 'My Title from Test';
    const tempWrapper = shallowMount(CounterComponent, {
      props: {
        title,
      },
    });

    const titleHtml = tempWrapper.find('h1');
    expect(titleHtml.text()).toBe(title);
  });
});
