import { shallowMount } from '@vue/test-utils';
import IndecisionComponent from '@/components/IndecisionComponent';
import axios from 'axios';

describe('Indecision Component Test', () => {
  let wrapper;
  let input;
  let getAsnwerSpy;

  beforeEach(() => {
    wrapper = shallowMount(IndecisionComponent);
    input = wrapper.find('#question');
    getAsnwerSpy = jest.spyOn(wrapper.vm, 'getAnswer');

    jest.clearAllMocks();
  });

  it('should to match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should not to trigger any event on input (no question mark)', async () => {
    await input.setValue('Hello world');
    expect(getAsnwerSpy).not.toHaveBeenCalled();
  });

  it('should to trigger an event on question mark input', async () => {
    await input.setValue('Are your ready?');
    expect(getAsnwerSpy).toHaveBeenCalledTimes(1);
  });

  it('should to make http request to get data', async () => {
    await wrapper.vm.getAnswer();
    expect(wrapper.vm.questionAnswer?.image).toBeTruthy();
  });

  it('should to fail http request', async () => {
    const mockAxiosInstance = {
      get: jest.fn(),
    };
    jest.spyOn(axios, 'create').mockReturnValueOnce(mockAxiosInstance);

    mockAxiosInstance.get.mockRejectedValueOnce(
      new Error('Request failed with status code 500')
    );

    await wrapper.vm.getAnswer.call({
      axiosInstance: mockAxiosInstance,
    });
    expect(wrapper.vm.questionAnswer?.image).toBeFalsy();

  });
});
