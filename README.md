# Bit issue

Steps to reproduce

```bash
cd libraries/design-system/
bit install
bit compile
bit build --log=trace
```

Current result

`Error: Cannot find module 'typescript/lib/tsserver.js'` on step `teambit.pipelines/builder, running tasks (6/8). env "teambit.react/react", task "teambit.semantics/schema:ExtractSchema (extract api schema for a set of components)`

![Log](files://./log.png)