# eslint-config-asl
extended asl eslint configuration

# .estlintrc (deprecated)
```
extends:
  - "@ukhomeoffice/asl"
```
# new config
``` 
insert in file: package-root/eslint.config.js

  import config from '@ukhomeoffice/eslint-config-asl/eslint.config.js';
  export default config;

```

# History
ASPeL is consuming eslint from X ASL dev, there was a preference applied by the previous dev. However it may not be inline with HO standards. The old eslint config was also provided by a git repo and HO control was almost no existential. Therefore this new space is the beginning of ASL.  
OLD repo: https://github.com/lennym/eslint-config-lennym

# Usage
To start with no change as keeping the historic rules. 
