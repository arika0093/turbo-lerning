import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
   schema: './schema/*.graphql',
   // documents: ['../../apps/web/**.*.ts*', './graphql/**/*.graphql'],
   ignoreNoDocuments: true,
   generates: {
      './dist/': {
        preset: 'client',
      },
   }
}
export default config