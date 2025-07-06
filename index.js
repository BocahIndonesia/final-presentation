const [
    buttonRelatedPaper,
    buttonInterestingAnalysis,
    buttonThePerformance,
    buttonCloseOverlay
] = [
    document.querySelector('.button[data-text="Related Paper"]'),
    document.querySelector('.button[data-text="Interesting Analysis"]'),
    document.querySelector('.button[data-text="The Performance"]'),
    document.querySelector('#close-overlay')
]

const [
    buttonAnalysis1, buttonAnalysis2, buttonAnalysis3,
    plotAnalysis1, plotAnalysis2, plotAnalysis3,
    descAnalysis1, descAnalysis2, descAnalysis3
] = [
    document.querySelector('button.analysis.one'),
    document.querySelector('button.analysis.two'),
    document.querySelector('button.analysis.three'),
    document.querySelector('img.analysis.one'),
    document.querySelector('img.analysis.two'),
    document.querySelector('img.analysis.three'),
    document.querySelector('div.analysis.one'),
    document.querySelector('div.analysis.two'),
    document.querySelector('div.analysis.three')
]

let [model, plot] = ['rf', 'confusion']

const [
    buttonRF, buttonAB, buttonGB,
    buttonConfusion, buttonROC
] = [
    document.querySelector('button.model.rf.performance'),
    document.querySelector('button.model.ab.performance'),
    document.querySelector('button.model.gb.performance'),
    document.querySelector('button.plot.confusion'),
    document.querySelector('button.plot.roc'),
]

function toggleOverlay() {
    document.querySelector('#overlay').toggleAttribute('active')
}

function activateModal(id) {
    document.querySelectorAll('modal').forEach(modal=> {
        modal.removeAttribute('active');
        (modal.getAttribute('id') === id) && modal.setAttribute('active', null)
    })
}

function activateAnalysis(number) {
    document.querySelectorAll('.analysis').forEach(el=>{
        el.removeAttribute('active');
        el.classList.contains(number) &&  el.setAttribute('active', null)
    })
}

function activateVisual(model, plot) {
    document.querySelectorAll('.performance.visual').forEach(visual=> {
        visual.removeAttribute('active')
    })

    document.querySelector(`.performance.visual.${model}.${plot}`).setAttribute('active', null)
}

buttonRelatedPaper.addEventListener('click', _=> {
    toggleOverlay()
    activateModal('related-paper')
})


buttonInterestingAnalysis.addEventListener('click', _=> {
    toggleOverlay()
    activateModal('interesting-analysis')
})

buttonThePerformance.addEventListener('click', _=> {
    toggleOverlay()
    activateModal('the-performance')
})

buttonCloseOverlay.addEventListener('click', toggleOverlay)

buttonAnalysis1.addEventListener('click', _=> activateAnalysis('one'))
buttonAnalysis2.addEventListener('click', _=> activateAnalysis('two'))
buttonAnalysis3.addEventListener('click', _=> activateAnalysis('three'))

buttonRF.addEventListener('click', _=>{
    model='rf'
    activateVisual('rf', plot)
    document.querySelector('.performance.model[active]').removeAttribute('active')
    document.querySelector('.performance.model.rf').setAttribute('active', null)
})
buttonAB.addEventListener('click', _=>{
    model='ab'
    activateVisual('ab', plot)
    document.querySelector('.performance.model[active]').removeAttribute('active')
    document.querySelector('.performance.model.ab').setAttribute('active', null)
})
buttonGB.addEventListener('click', _=>{
    model='gb'
    activateVisual('gb', plot)
    document.querySelector('.performance.model[active]').removeAttribute('active')
    document.querySelector('.performance.model.gb').setAttribute('active', null)
})

buttonConfusion.addEventListener('click', _=>{
    plot='confusion'
    activateVisual(model, 'confusion')
    document.querySelector('.performance.plot[active]').removeAttribute('active')
    document.querySelector('.performance.plot.confusion').setAttribute('active', null)
})
buttonROC.addEventListener('click', _=>{
    plot='roc'
    activateVisual(model, 'roc')
    document.querySelector('.performance.plot[active]').removeAttribute('active')
    document.querySelector('.performance.plot.roc').setAttribute('active', null)
})
