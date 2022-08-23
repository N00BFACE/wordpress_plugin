import { useBlockProps } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		header_title, header_subtitle, image,
		showTitle, showSubtitle, showHeader, showImage, showRow,
		row_one, showRowOne, showRowOneImage, showRowOneText,
		row_two, showRowTwo, showRowTwoImage, showRowTwoText,
	} = attributes;
	return (
		<div { ...useBlockProps.save() } >
			{ showHeader &&
				<div className="wp-block-themeisle-blocks-header"
					style={{
						backgroundImage: showImage ? `url(${ image.url })` : 'none',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundAttachment: 'fixed',
						height: '545px',
					}}
				>
					<div style={{
						padding: '120px 60px 120px 60px'
					}}>
						<div className="wp-block-themeisle-blocks-header__title"
							style={{
							textAlign: header_title.align,
							color: header_title.color,
						}}>
							{ showTitle && 
								<RichText.Content tagName="h2" value={ header_title.text } 
									style={{
										paddingTop: '1.5em',
									}}
								/>
							}
						</div>
						<div className="wp-block-themeisle-blocks-header__subtitle" style={{ textAlign: header_title.align }}>
							{ showSubtitle &&
								<RichText.Content tagName="small" value={ header_subtitle.text } 
									style={{
										color: header_subtitle.color,
									}}
								/>
							}
						</div>
					</div>
				</div>
			}
			{ showRow &&
				<div className="wp-block-themeisle-blocks-body">
					{ showRowOne &&
						<div className="wp-block-themeisle-blocks-body__row-one" style={{ backgroundColor: row_one.back, display: 'grid', gridTemplateColumns: '60% auto', columnGap: '20px' }} >
							{ showRowOneImage &&
								<div>
									<img src={ row_one.url } alt={ row_one.alt } style={{ width: '100%'}} />
								</div>
							}
							{ showRowOneText &&
								<RichText.Content tagName="p" value={ row_one.text } style={{ color: row_one.color, margin: '30% 15% 0% 15%' }} />
							}
						</div>
					}
					{ showRowTwo &&
						<div className="wp-block-themeisle-blocks-body__row-two" style={{ backgroundColor: row_two.back, display: 'grid', gridTemplateColumns: 'auto 60%', columnGap: '20px' }} >
							{ showRowTwoText &&
								<RichText.Content tagName="p" value={ row_two.text } style={{ color: row_two.color, padding: '30% 15% 0% 15%'}} />
							}
							{ showRowTwoImage &&
								<div>
									<img src={ row_two.url } alt={ row_two.alt } style={{ width: '100%'}} />
								</div>
							}
						</div>
					}
				</div>
			}
		</div>
	);
}
