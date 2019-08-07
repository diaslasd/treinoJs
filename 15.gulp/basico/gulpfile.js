const gulp = require('gulp')

gulp.task('default', () => {
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes'], () => {
    console.log('Copiar')
    gulp.src(['pastaA/*.txt', 'pastaA/pastaC/arquivo3.txt'])
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes', () => {
    console.log('Antes')
})

gulp.task('fim', () => {
    console.log('Fim')
})