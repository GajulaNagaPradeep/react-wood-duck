import React from 'react';
import { shallow } from 'enzyme';
import './EnzymeSetup';

import ProfileAvatar from '../ProfileAvatar';

describe('ProfileAvatar', () => {
  const defaultProfileAvatar = <i className="fa fa-user" />;
  it('Default', () => {
    expect(shallow(<ProfileAvatar />).equals(null)).toBe(true);
  });

  describe('given profileId', () => {
    const profileAvatar = shallow(<ProfileAvatar profileId="profile.id" />);
    it('renders default avatar', () => {
      expect(profileAvatar.contains(defaultProfileAvatar)).toBe(true);
    });

    it('clicking on profile avatar does not render logout button', () => {
      profileAvatar.simulate('click');
      expect(profileAvatar.findWhere(n => n.text() === 'Logout').exists()).toBe(
        false
      );
    });
  });

  describe('given logoutCallback', () => {
    let spyCallback;
    let profileAvatar;

    beforeEach(() => {
      spyCallback = jasmine.createSpy('callback');
      profileAvatar = shallow(<ProfileAvatar logoutCallback={'callback'} />);
    });

    it('renders default avatar', () => {
      expect(profileAvatar.contains(defaultProfileAvatar)).toBe(true);
    });

    it('clicking on profile avatar renders logout button', () => {
      profileAvatar.find('a').simulate('click');
      expect(profileAvatar.findWhere(n => n.text() === 'Logout').exists()).toBe(
        true
      );
    });

    it('clicking on profile avatar hides visible logout button', () => {
      profileAvatar.setState({ isHidden: false });
      profileAvatar
        .find('a')
        .first()
        .simulate('click');
      expect(profileAvatar.findWhere(n => n.text() === 'Logout').exists()).toBe(
        false
      );
    });

    it('clicking on profile avatar focuses logout button', () => {
      profileAvatar.setState({ isHidden: true });
      profileAvatar
        .find('a')
        .first()
        .simulate('click');
      expect(profileAvatar.state().dropdownFocused).toBe(true);
    });

    describe('when the menu is not moused over', () => {
      it('blurs the avatar hides the logout button', () => {
        profileAvatar.setState({ isHidden: false, dropdownFocused: false });
        profileAvatar
          .find('a')
          .first()
          .simulate('blur', { preventDefault: () => {} });
        expect(
          profileAvatar.findWhere(n => n.text() === 'Logout').exists()
        ).toBe(false);
      });

      describe('when focusing the logout link', () => {
        it('changes mouse over state', () => {
          profileAvatar.setProps({ logoutCallback: spyCallback });
          profileAvatar.setState({ isHidden: false, dropdownFocused: false });
          profileAvatar
            .find('a')
            .at(1)
            .simulate('focus');
          expect(profileAvatar.state().dropdownFocused).toBe(true);
        });
      });
    });

    describe('when the menu is moused over', () => {
      it('blurs the avatar does not hide the logout button', () => {
        profileAvatar.setState({ isHidden: false, dropdownFocused: true });
        profileAvatar
          .find('a')
          .first()
          .simulate('blur', { preventDefault: () => {} });
        expect(
          profileAvatar.findWhere(n => n.text() === 'Logout').exists()
        ).toBe(true);
      });

      describe('blurring the logout link', () => {
        it('changes mouse over state', () => {
          profileAvatar.setProps({ logoutCallback: spyCallback });
          profileAvatar.setState({ isHidden: false, dropdownFocused: true });
          profileAvatar
            .find('a')
            .at(1)
            .simulate('blur');
          expect(profileAvatar.state().dropdownFocused).toBe(false);
          expect(profileAvatar.state().isHidden).toBe(true);
        });
      });
    });

    describe('when clicking logout', () => {
      it('invokes logoutCallback', () => {
        profileAvatar.setProps({ logoutCallback: spyCallback });
        profileAvatar.setState({ isHidden: false });
        profileAvatar
          .find('a')
          .at(1)
          .simulate('mouseover');
        profileAvatar
          .find('a')
          .first()
          .simulate('blur', { preventDefault: () => {} });
        profileAvatar
          .find('a')
          .at(1)
          .simulate('click', { preventDefault: () => {} });
        expect(spyCallback).toHaveBeenCalled();
        expect(profileAvatar.html()).not.toContain('logout');
      });

      it('closes the dropdown menu and sets dropdownFocused to true', () => {
        profileAvatar.setProps({ logoutCallback: spyCallback });
        profileAvatar.setState({ isHidden: false, dropdownFocused: true });
        profileAvatar
          .find('a')
          .at(1)
          .simulate('click', { preventDefault: () => {} });
        expect(profileAvatar.html()).not.toContain('Logout');
        expect(profileAvatar.state().dropdownFocused).toBe(true);
        expect(profileAvatar.state().isHidden).toBe(true);
      });
    });
  });

  it('renders given profile avatar', () => {
    const avatar = <i className="fa fa-warning" />;
    const profileAvatar = shallow(
      <ProfileAvatar profileId="profile.id" profileAvatar={avatar} />
    );
    expect(profileAvatar.contains(avatar)).toBe(true);
  });
});
