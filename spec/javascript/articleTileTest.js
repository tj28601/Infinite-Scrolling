import ArticleTile from '../../app/javascript/react/components/ArticleTile';
import { shallow, mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
 

Object.assign(global, {
 jasmineEnzyme,
 mount,
 React,
 shallow,
});

let requireAll = requireContext => {
 requireContext.keys().forEach(requireContext);
};

describe('ArticleTile', ()=>{
 let wrapper
 beforeEach(() => {
   jasmineEnzyme();
   wrapper = mount(
     <ArticleTile />
   )

   wrapper.setProps({ title: "Stellar Biotechnologies Reports Third Quarter Financial Results",
   published: "2018-07-05 07:30:00" })
  });

 // it('Should return html with the data from props', () => {
 //   // expect(wrapper.find('li').at(0)).toHaveText("Stellar Biotechnologies Reports Third Quarter Financial Results")
 //   expect(wrapper.find('li').at(0)).toHaveText("Title")
 // })
})
