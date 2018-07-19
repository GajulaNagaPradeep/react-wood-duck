import React from 'react';
import { shallow } from 'enzyme';
import './EnzymeSetup';

import GlobalHeader from '../GlobalHeader';
import GlobalHeaderAction from '../GlobalHeaderAction';
import ProfileAvatar from '../ProfileAvatar';

describe('Global Header', () => {
  const searchIcon = <i className="fa fa-search" />;
  const addNewIcon = <i className="fa fa-plus" />;
  const notificationIcon = <i className="fa fa-bell" />;

  describe('With default properties', () => {
    const globalHeader = shallow(<GlobalHeader />);

    it('renders the tag', () => {
      expect(globalHeader.type()).toBe('header');
    });

    it('has a div wrapper with a container class', () => {
      expect(globalHeader.find('.container').length).toEqual(1);
    });

    it('renders nav element', () => {
      expect(globalHeader.find('nav').length).toEqual(1);
    });

    it('renders logo', () => {
      expect(globalHeader.findWhere(n => n.text() === 'CWDS').exists()).toBe(
        true
      );
    });

    it('contains search action without callback', () => {
      expect(
        globalHeader.contains(
          <GlobalHeaderAction icon={searchIcon} ariaLabel="search" />
        )
      ).toBe(true);
    });

    it('contains add action without callback', () => {
      expect(
        globalHeader.contains(
          <GlobalHeaderAction icon={addNewIcon} ariaLabel="add new" />
        )
      ).toBe(true);
    });

    it('contains notification action without callback', () => {
      expect(
        globalHeader.contains(
          <GlobalHeaderAction
            icon={notificationIcon}
            ariaLabel="notifications"
          />
        )
      ).toBe(true);
    });

    it('renders empty profile name', () => {
      expect(globalHeader.find('.profile').text()).toBe('');
    });
  });

  describe('With given properties', () => {
    var input = {
      logo: 'testlogo',
      logoCallback: function() {},
      profileId: 'user.id',
      profileName: 'testProfileName',
      profileAvatar: 'testProfileAvatar',
      searchCallback: function() {},
      addNewCallback: function() {},
      notificationsCallback: function() {},
      logoutCallback: function() {},
    };
    let globalHeaderWithProps;
    beforeEach(function() {
      globalHeaderWithProps = shallow(<GlobalHeader {...input} />);
    });

    it('click on logo invokes logoCallback', () => {
      spyOn(input, 'logoCallback');
      globalHeaderWithProps.setProps({ logoCallback: input.logoCallback });
      globalHeaderWithProps
        .find('.logo')
        .find('button')
        .simulate('click');
      expect(input.logoCallback).toHaveBeenCalled();
    });

    it('renders search icon', () => {
      expect(
        globalHeaderWithProps.contains(
          <GlobalHeaderAction
            icon={searchIcon}
            ariaLabel="search"
            callback={input.searchCallback}
            profileId={input.profileId}
          />
        )
      ).toBe(true);
    });

    it('renders "add new" action with callback', () => {
      expect(
        globalHeaderWithProps.contains(
          <GlobalHeaderAction
            icon={addNewIcon}
            ariaLabel="add new"
            callback={input.addNewCallback}
            profileId={input.profileId}
          />
        )
      ).toBe(true);
    });

    it('renders notification action with callback', () => {
      expect(
        globalHeaderWithProps.contains(
          <GlobalHeaderAction
            icon={notificationIcon}
            ariaLabel="notifications"
            callback={input.notificationsCallback}
            profileId={input.profileId}
          />
        )
      ).toBe(true);
    });

    it('renders empty profile name with callback', () => {
      expect(globalHeaderWithProps.find('.profile').text()).toBe(
        input.profileName
      );
    });

    it('renders profile avatar with given profileAvatar property', () => {
      expect(
        globalHeaderWithProps.contains(
          <ProfileAvatar
            profileId={input.profileId}
            profileAvatar={input.profileAvatar}
            logoutCallback={input.logoutCallback}
          />
        )
      ).toBe(true);
    });
  });
});
