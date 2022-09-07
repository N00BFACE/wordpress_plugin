import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save( { attributes } ) {
	const {
		header_title, header_subtitle, image,
		showTitle, showSubtitle, showHeader, showImage,
		row_one, showRowOne, showRowOneImage, showRowOneSubtitle, showRowOneTitle, showRowOneText,
		row_two, showRowTwo, showRowTwoImage, showRowTwoSubtitle, showRowTwoTitle, showRowTwoText,
		showAboutUs, showStaff, staff, staffNumber,
		showContactUs, contact_form, showContactForm, showContactFormTitle, showName,
	} = attributes;

	const staffNum = staffNumber;

	return (
		<div { ...useBlockProps.save() } style={{ fontFamily: '-moz-initial' }} >
			{ showHeader &&
				<div className="pageblock-home"
				style={{
					backgroundImage: showImage ? `url(${ image.url })` : 'none',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
					backgroundColor: image.color,
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
			}
			{ showAboutUs &&
				<div className="pageblock-about-us">
					{ showRowOne &&
						<div className="pageblock-about-us_row-one" style={{ backgroundColor: row_one.back, display: 'grid', gridTemplateColumns: '50% auto', columnGap: '20px', padding: '25px' }} >
							{ showRowOneImage &&
								<div>
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
								<div>
									<img src={ row_two.url } alt={ row_two.alt } style={{ width: '100%'}} />
								</div>
							}
						</div>
					}
					{/* { showStaff &&
						<div className="pageblock-about-us-staff staff" style={{ display: 'grid', gridTemplateColumns: '33% 33% 33%', columnGap: '5px'}}>
							{ staff.map( ( staffMember, index ) => {
								if ( index < staffNum && staff.length != 0 ) {
									if( staffNum < 4 ) {
										return (
											<div className="staff-member">
												<div style={{ backgroundColor: 'whitesmoke', textAlign: 'center', }}>
													<h5>{ staffMember.name }</h5>
													<p>{ staffMember.image }</p>
													<p>{ staffMember.position }</p>
												</div>
											</div>
										);
									}
									if ( staffNum > 3 && staffNum < 7 ) {
										return (
											<div className="staff-member">
												<div style={{ backgroundColor: 'whitesmoke', textAlign: 'center', }}>
													<h5>{ staffMember.name }</h5>
													<p>{ staffMember.image }</p>
													<p>{ staffMember.position }</p>
												</div>
											</div>
										);
									}
									if ( staffNum > 6 && staffNum < 10 ) {
										return (
											<div className="staff-member">
												<div style={{ backgroundColor: 'whitesmoke', textAlign: 'center', }}>
													<h5>{ staffMember.name }</h5>
													<p>{ staffMember.image }</p>
													<p>{ staffMember.position }</p>
												</div>
											</div>
										);
									}
								}
							} ) }
						</div>
					} */}
				</div>
			}
			{ showContactUs &&
				<div className="pageblock-about-us-contact-us contact-us" >
					{ showContactForm &&
						<div className="contact-us-contact-form contact-form">
							{ showContactFormTitle &&
								<div className="contact-us-contact-form-title">
									<RichText.Content tagName='h4' value={ contact_form.title } />
								</div>
							}
							<form action="" method="POST">
								{ showName &&
									<div className="contact-us-contact-form-name">
										<label htmlFor="name" style={{ display: 'block', margin: '10px', fontSize: '1.2rem', textTransform: 'uppercase', textAlign: 'left' }}>Name</label>
										<input required type="text" className="form-control" id="name" placeholder="Enter name" style={{ width: '50%', borderRadius: '25px', border: '1px solid #ccc', padding: '10px', fontSize: '1rem', textAlign: 'left', fontFamily: '-moz-initial' }}/>
									</div>
								}
								<div className="contact-us-contact-form-email">
									<label htmlFor="email" style={{ display: 'block', margin: '10px', fontSize: '1.2rem', textTransform: 'uppercase', textAlign: 'left' }}>Email</label>
									<input required type="email" className="form-control" id="email" placeholder="Enter email" style={{ width: '50%', borderRadius: '25px', border: '1px solid #ccc', padding: '10px', fontSize: '1rem', textAlign: 'left', fontFamily: '-moz-initial' }}/>
								</div>
								<div className="contact-us-contact-form-message">
									<label htmlFor="message" style={{ display: 'block', margin: '10px', fontSize: '1.2rem', textTransform: 'uppercase', textAlign: 'left' }}>Message</label>
									<textarea required className="form-control" id="message" rows="3" placeholder="Enter message" style={{ width: '70%', borderRadius: '15px', border: '1px solid #ccc', padding: '10px', fontSize: '1rem', textAlign: 'left', fontFamily: '-moz-initial' }}></textarea>
								</div>
								<div className="contact-us-contact-form-button">
									<input type="submit" className='button button-primary' style={{ borderRadius: '15px', border: '1px solid #ccc', fontSize: '1.05rem', textTransform: 'uppercase', textAlign: 'center', padding: '5px', fontFamily: '-moz-initial' }} value={ contact_form.submit } />
								</div>
							</form>
						</div>
					}
				</div>
			}
		</div>
	);
}
