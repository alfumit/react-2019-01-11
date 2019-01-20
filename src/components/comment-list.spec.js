import React from 'react'
import Enzyme, { render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentList from './comment-list'
import mockedArticles from '../fixtures';

Enzyme.configure({ adapter: new Adapter() })
const commentsMock = mockedArticles[0].comments;

describe('Commnet List', function() {
  it('should render', () => {
    const wrapper = render(
      <CommentList comments={commentsMock}/>
    )
    
    expect(wrapper).toBeDefined();
  })
  
  it('should hide comments by default', () => {
    const wrapper = mount(
      <CommentList comments={commentsMock}/>
    )
    
    expect(wrapper.find('.test--comments-body').length).toEqual(0);
  })
  
  it('should show when the button is clicked', () => {
    const wrapper = mount(
      <CommentList comments={commentsMock}/>
    )
    wrapper.find('.test--comments-btn').at(0).simulate('click');
    
    expect(wrapper.find('.test--comments-body').length).toEqual(5);
  })
})
