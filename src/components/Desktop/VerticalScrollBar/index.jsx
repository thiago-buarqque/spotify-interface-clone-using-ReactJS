import React, { useEffect, useRef, useCallback } from 'react'

import { Div, Bar } from './styles.js'

const VerticalScrollBar = props => {
    const refBar = useRef(null)
    const refScroll = useRef(null)
    const maxScrollValue = useRef(0)
    const firstLoad = useRef(true)

    const handleParentScroll = useCallback(() => {
        const styleBar = window.getComputedStyle(refBar.current)
        const barHeight = styleBar.getPropertyValue('height').split('px')[0]

        const styleScroll = window.getComputedStyle(refScroll.current)
        const scrollHeight = styleScroll.getPropertyValue('height').split('px')[0]

        const parent = props.refParentContainer.current

        const newBarPosition = ((scrollHeight - barHeight) * parent.scrollTop) / maxScrollValue.current

        refBar.current.style.transform = `translate(0px, ${newBarPosition}px)`
    },[props,maxScrollValue])

    const handleBarScroll = useCallback(() => {
        const bar = refBar.current
        const scroll = refScroll.current

        let posY = 0
        let newPosY = 0

        bar.onmousedown = (e) => {
            e = e || window.event
            e.preventDefault()

            posY = e.clientY

            document.onmouseup = finishMoveEvent
            document.onmousemove = handleMove
        }

        const handleMove = (e) => {
            console.log("moving bar")
            e = e || window.event
            e.preventDefault()

            const styleBar = window.getComputedStyle(bar)
            const barHeight = styleBar.getPropertyValue('height').split('px')[0]

            const barTopPosition = styleBar.getPropertyValue('transform').toString().split(')')[0].split(',')[5].trim()

            const styleScroll = window.getComputedStyle(scroll)
            const scrollHeight = styleScroll.getPropertyValue('height').split('px')[0]

            const parent = props.refParentContainer.current

            newPosY = posY - e.clientY

            //save y position to the next event
            posY = e.clientY

            let newBarPosition = barTopPosition - newPosY

            let maxBarPosition = scrollHeight - barHeight

            if (newBarPosition < 0) newBarPosition = 0
            else if (newBarPosition > maxBarPosition) newBarPosition = maxBarPosition

            bar.style.transform = `translate(0px, ${newBarPosition}px)`

            const scrollTo = ((maxScrollValue.current * newBarPosition)) / (maxBarPosition)
            parent.scrollTop = scrollTo
        }

        const finishMoveEvent = () => {
            document.onmouseup = null
            document.onmousemove = null
        }
    },[props,maxScrollValue])

    useEffect(() => {
        if (firstLoad) {
            let styleParent = window.getComputedStyle(props.refParentContainer.current)
            let styleBody = window.getComputedStyle(props.refParentBody.current)

            let parentHeight = styleParent.getPropertyValue('height').split('px')[0]
            let bodyHeight = styleBody.getPropertyValue('height').split('px')[0]

            //Personal choose about scroll bar size
            let barSize = 100 / (bodyHeight / parentHeight)

            refBar.current.style.height = `${barSize.toFixed(3)}%`            

            let parent = props.refParentContainer.current

            handleBarScroll()

            parent.addEventListener('scroll', handleParentScroll)

            firstLoad.current = false
            maxScrollValue.current = Number(bodyHeight - parentHeight)
        }
    },[props,firstLoad,handleBarScroll,handleParentScroll])

    return (
        <Div ref={refScroll} id='vertical-scroll'>
            <Bar ref={refBar} id='vertical-scroll-bar' />
        </Div>
    )
}

export default VerticalScrollBar