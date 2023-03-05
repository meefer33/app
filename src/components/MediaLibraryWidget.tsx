export default function MediaLibraryWidget() {
  const IK_HOST = 'https://eml.imagekit.io'
  const IK_SRC = `${IK_HOST}/media-library-widget?redirectTo=media-library-widget&isMediaLibraryWidget=true`
  const IK_FRAME_TITLE = 'ImageKit Embedded Media Library'
  const view = 'modal'
  //const dispatch = useAppDispatch()
  
  const callbackFunction = (payload) => {
    console.log(payload)
  }

  // Called sometime after postMessage is called
  window.addEventListener('message', function (event) {
    if (event.origin !== IK_HOST) {
      return
    }

    if (event.data.eventType === 'CLOSE_MEDIA_LIBRARY_WIDGET' || event.data.eventType === 'INSERT') {
      callbackFunction(event.data)
      //dispatch(updateAppState({mediaOpen: false}))
    }
  })

  return (
    <>
      <div className="fixed w-full h-full left-0 top-0 z-1 p-4 overflow-auto bg-black-alpha-40">
        <div className="surface-ground m-auto border-primary border-round border-2 w-full h-full">
          <iframe
            title={IK_FRAME_TITLE}
            src={`${IK_SRC}&widgetHost=${window.location.href}`}
            sandbox="allow-top-navigation allow-same-origin allow-scripts allow-forms allow-modals"
            height="100%"
            width="100%"
          ></iframe>
        </div>
      </div>
    </>
  )
}
