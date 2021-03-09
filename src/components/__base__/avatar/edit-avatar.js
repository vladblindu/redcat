import React from 'react'
import cn from 'classnames'
import {useDropzone} from 'react-dropzone'
import AvatarEditor from "react-avatar-editor"
import PropTypes from "prop-types"
import {DEFAULT_OPTS, DELTA_ROTATE} from './constants'
import {defaultAvatar} from '../../../assets/theme/default-avatar.json'
import RotateButton from '../buttons/rotate-button'
import SetImageButton from './set-image-button'
import {useField} from 'formik'
import {useStatus} from "../../../lib/status"
import {WARNING_NOTIFICATION} from "../../../lib/status/constants"

const EditAvatar = ({opts}) => {
    const maxSize = 500000
    // strings and language
    const {setStatus} = useStatus()

    const {position, scale, rotate, ...rest} = {...DEFAULT_OPTS, ...opts}
    const ref = React.useRef()

    // formik stuff
    const ufd = useField('avatar')
    const {value} = ufd[0]
    const {setValue} = ufd[2]

    // local state
    const [img, setImg] = React.useState({
        changed: false,
        image: value || defaultAvatar,
        position,
        scale,
        rotate
    })

    // drag&drop (react-dropzone)
    const handleOnDrop = React.useCallback(acceptedFiles => {
        if (acceptedFiles && !acceptedFiles.length)
            setStatus(WARNING_NOTIFICATION, 'avatar-error-message')
        else {
            setImg({...img, image: acceptedFiles[0], cropped: acceptedFiles[0]})
        }
    }, [setStatus, img])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop: handleOnDrop,
        accept: 'image/jpeg, image/png, image/gif, image/jpeg, image/bmp',
        maxSize
    })

    const setCropped = () => {
        if (img.changed) {
            setImg({...img, changed: false})
            setValue(ref.current.getImageScaledToCanvas().toDataURL())
        }
    }

    const onImageReady = () => {
        setCropped()
    }

    const handleScaleChange = e => {
        const scale = parseFloat(e.target.value)
        setImg({...img, scale, changed: true})
    }

    const handleRotateChangeRight = () => {
        setImg({...img, rotate: img.rotate + DELTA_ROTATE, changed: true})
    }

    const handleRotateChangeLeft = () => {
        setImg({...img, rotate: img.rotate - DELTA_ROTATE, changed: true})
    }

    const handlePositionChange = position => {
        setImg({...img, position, changed: true})
    }

    return <div className="w-full sm:flex p-4 rounded-lg border-2 border-ink-hover mb-8">
        <div className="inline-block relative">
            <div className='rounded-lg border-4 bg-ink-hover border-ink-hover mb-2 p-2 mx-auto'>
                <AvatarEditor
                    className="bg-paper"
                    ref={ref}
                    image={img.image}
                    scale={img.scale}
                    position={img.position}
                    rotate={img.rotate}
                    onPositionChange={handlePositionChange}
                    onImageReady={onImageReady}
                    tabIndex={0}
                    {...rest}/>
            </div>
            <div className="flex items-center">
                <div>
                    <RotateButton action={handleRotateChangeLeft} left/>
                </div>
                <div className="px-2">
                    <input
                        className="flex-1 rounded-lg"
                        name='scale'
                        type='range'
                        onChange={handleScaleChange}
                        min='1'
                        max='2'
                        step='0.1'
                        defaultValue='1'
                    />
                </div>
                <div>
                    <RotateButton action={handleRotateChangeRight}/>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col">
            <div
                {...getRootProps({
                    className: cn(
                        'flex-1 flex justify-center items-center mb-2 ml-2 rounded-lg',
                        'p-2 border-2 border-dashed border-ink-hover outline-none text-center',
                        {
                            'stripes': isDragActive
                        }
                    )
                })}>
                {
                    isDragActive ?
                        <p>Upload Drop</p> :
                        <p>Upload Instructions</p>
                }
            </div>
            <div className="flex justify-end">
                <SetImageButton action={setCropped} disabled={!img.changed}/>
            </div>
            <input {...getInputProps()}/>

        </div>
    </div>

}

EditAvatar.propTypes = {
    name: PropTypes.string,
    opts: PropTypes.object
}

export default EditAvatar
