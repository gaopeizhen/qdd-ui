export * from './Qdd-ui';

import * as QddUI from './qdd-ui';
export default QddUI;

declare module './Qdd-ui/lib/theme' {
  import * as QddUI from './qdd-ui';
  export default QddUI.theme;
}

declare module './Qdd-ui/lib/theme/colors' {
  import * as QddUI from './qdd-ui';
  export default QddUI.Colors;
}
