import { useBlockProps } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';
import { Card, CardBody, CardFooter } from '@wordpress/components';

export default function save( { attributes } ) {
	const {
		header_title, header_subtitle, image,
		showTitle, showSubtitle, showHeader, showImage,
		row_one, showRowOne, showRowOneImage, showRowOneSubtitle, showRowOneTitle, showRowOneText,
		row_two, showRowTwo, showRowTwoImage, showRowTwoSubtitle, showRowTwoTitle, showRowTwoText,
		showAboutUs, staff_one, staff_two, staff_three,
	} = attributes;
	return (
		<div { ...useBlockProps.save() } style={{ maxWidth: '840px', margin: '0 auto' }} >
			{ showHeader &&
				<div className="pageblock-home"
					style={{
						backgroundImage: showImage ? `url(${ image.url })` : 'none',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundAttachment: 'fixed',
						backgroundColor: image.color,
					}}
				>
					<div style={{
						padding: '120px 60px 120px 60px'
					}}>
						<div className="pageblock-home-title"
							style={{
							textAlign: header_title.align,
						}}>
							{ showTitle && 
								<RichText.Content tagName="h2" value={ header_title.text } 
									style={{
										color: header_title.color,
									}}
								/>
							}
						</div>
						<div className="pageblock-home-subtitle" style={{ textAlign: header_title.align }}>
							{ showSubtitle &&
								<RichText.Content tagName="p" value={ header_subtitle.text } 
									style={{
										color: header_subtitle.color,
										padding: '0 70px 0 70px'
									}}
								/>
							}
						</div>
					</div>
				</div>
			}
			{ showAboutUs &&
				<div className="pageblock-about-us">
					{ showRowOne &&
						<div className="pageblock-about-us_row-one" style={{ backgroundColor: row_one.back, display: 'grid', gridTemplateColumns: '50% auto', columnGap: '20px', padding: '25px' }} >
							{ showRowOneImage &&
								<div style={{ display: 'flex' }}>
									<img src={ row_one.url } alt={ row_one.alt } style={{ width: '100%'}} />
								</div>
							}
							<div className="pageblock-about-us-content_one">
								{ showRowOneSubtitle &&
									<RichText.Content tagName="small" value={ row_one.subtitle }/>
								}
								{ showRowOneTitle &&
									<RichText.Content tagName="h2" value={ row_one.title }/>
								}
								{ showRowOneText &&
									<RichText.Content tagName="p" value={ row_one.text }/>
								}
							</div>
						</div>
					}
					{ showRowTwo &&
						<div className="pageblock-body-row-two" style={{ backgroundColor: row_two.back, display: 'grid', gridTemplateColumns: 'auto 50%', columnGap: '20px', padding: '25px' }} >
							<div className="pageblock-about-us-content_two" >
								{ showRowTwoSubtitle &&
									<RichText.Content tagName="small" value={ row_two.subtitle }/>
								}
								{ showRowTwoTitle &&
									<RichText.Content tagName="h2" value={ row_two.title }/>
								}
								{ showRowTwoText &&
									<RichText.Content tagName="p" value={ row_two.text }/>
								}
							</div>
							{ showRowTwoImage &&
								<div style={{ display: 'flex' }}>
									<img src={ row_two.url } alt={ row_two.alt } style={{ width: '100%'}} />
								</div>
							}
						</div>
					}
					{/* <div className="pageblock-about-us-staff" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '1em' }}>
						<div>
							<Card>
								<CardBody>
									<img src={ staff_one.url } alt={ staff_one.alt } style={{ width: '100%'}} />
								</CardBody>
								<CardFooter>
									<RichText.Content tagName="b" value={(staff_one.name)} style={{ color: staff_one.color, }} />
								</CardFooter>
							</Card>
						</div>
						<div>
							<Card>
								<CardBody>
									<img src={ staff_two.url } alt={ staff_two.alt } style={{ width: '100%'}} />
								</CardBody>
								<CardFooter>
									<RichText.Content tagName="b" value={(staff_two.name)} style={{ color: staff_two.color, }} />
								</CardFooter>
							</Card>
						</div>
						<div>
							<Card>
								<CardBody>
									<img src={ staff_three.url } alt={ staff_three.alt } style={{ width: '100%'}} />
								</CardBody>
								<CardFooter>
									<RichText.Content tagName="b" value={(staff_three.name)} style={{ color: staff_three.color, }} />
								</CardFooter>
							</Card>
						</div>
					</div> */}
				</div>
			}
		</div>
	);
}
