
export default function addTests({ fdescribe, describe, it, firebase }) {
  //   it('works', () => {
  //     return new Promise((resolve) => {
  //       firebase.native.remoteConfig().enableDeveloperMode();
  //
  //       firebase.native.remoteConfig().setDefaults({
  //         foobar: '123',
  //         barbaz: '345'
  //       });
  //
  //       firebase.native.remoteConfig().fetch()
  //         .then(() => {
  //           return firebase.native.remoteConfig().activateFetched();
  //         })
  //         .then(() => {
  //           return firebase.native.remoteConfig().getValue('foobar')
  //         })
  //         .then((res) => {
  //           console.log('>>>>>', res.val())
  //           return Promise.resolve();
  //         })
  //     });
  //   });
  // });

  describe('Analytics', () => {
    it('logEvent: it should log a text event without error', () => {
      return new Promise((resolve) => {
        firebase.native.analytics().logEvent('test_event');
        resolve();
      });
    });

    it('logEvent: it should log a text event with parameters without error', () => {
      return new Promise((resolve) => {
        firebase.native.analytics().logEvent('test_event', {
          boolean: true,
          number: 1,
          string: 'string',
        });
        resolve();
      });
    });

    it('setAnalyticsCollectionEnabled: it should run without error', () => {
      return new Promise((resolve) => {
        firebase.native.analytics().setAnalyticsCollectionEnabled(true);
        resolve();
      });
    });

    it('setCurrentScreen: it should run without error', () => {
      return new Promise((resolve) => {
        firebase.native.analytics().setCurrentScreen('test screen', 'test class override');
        resolve();
      });
    });

    it('setMinimumSessionDuration: it should run without error', () => {
      return new Promise((resolve) => {
        firebase.native.analytics().setMinimumSessionDuration(10000);
        resolve();
      });
    });

    it('setSessionTimeoutDuration: it should run without error', () => {
      return new Promise((resolve) => {
        firebase.native.analytics().setSessionTimeoutDuration(1800000);
        resolve();
      });
    });

    it('setUserId: it should run without error', () => {
      return new Promise((resolve) => {
        firebase.native.analytics().setUserId('test-id');
        resolve();
      });
    });

    it('setUserProperty: it should run without error', () => {
      return new Promise((resolve) => {
        firebase.native.analytics().setUserProperty('test-property', 'test-value');
        resolve();
      });
    });
  });
}
