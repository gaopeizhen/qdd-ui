export * from './qdd-ui';

import * as QddUI from './qdd-ui';
export default QddUI;

declare module './qdd-ui/lib/theme' {
  import * as QddUI from './qdd-ui';
  export default QddUI.theme;
}

declare module './qdd-ui/lib/theme/colors' {
  import * as QddUI from './qdd-ui';
  export default QddUI.Colors;
}
