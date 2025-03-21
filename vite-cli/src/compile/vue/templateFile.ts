import options from '@/compile/vue/options'

const templateFilesMap = new Map()
templateFilesMap.set('vue', vueFetchTemplateFiles)
templateFilesMap.set('react', vueFetchTemplateFiles)
export function vueFetchTemplateFiles(): string[] {
  const files = [
    'package.json',
    'vite.config.ts',
    'src/main.ts',
    'build/vite/plugin.ts',
    'src/plugins/customComponents.ts',
    'src/components/Welcome.vue',
    'src/components/HelloWorld.vue',
    'src/App.vue',
    'src/plugins/assets.ts',
    options.usePinia ? 'src/store/modules/counter.ts' : null,
    '.eslintrc.js',
    // '.npmrc',
    'index.html'
  ]
  return files.filter(Boolean)
}
export { templateFilesMap }
