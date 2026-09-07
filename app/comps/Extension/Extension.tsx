import Image from 'next/image'
import "./Extension.css";

export default function Extension({ item, order }: {
    item: {
        img: string;
        title: string;
        description: string;
        url: string
    },
    order: number
}) {
    return (
        <div className={`extension extension-${order}`}>
            <Image
                alt="img"
                width="0"
                height="0"
                src={item.img}
                sizes="100vw"
                style={{
                    width: '100%',
                    maxWidth: `102px`,
                    height: 'auto',
                    maxHeight: `100px`
                }}
            />
            <div className='extension-info-wrapper'>
                <div className='extension-title'>Add to {item.title}</div>
                <div className="extension-description">Minimum version {item.description}</div>
            </div>

            <Image
                src="./bg-dots.svg"
                alt="img"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                    width: '100%',
                    maxWidth: `280px`,
                    height: '4px',
                    maxHeight: `100px`
                }}
            />

            <a href="" target="_blank" className="extension-install-link" style={{
                textDecoration: "none", width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'

            }}>
                <div className='extension-install'>Add & Install Extension</div>
            </a>
        </div>
    )
}
