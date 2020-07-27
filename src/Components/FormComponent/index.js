import React from 'react';
import fetchLink from '../../Helpers/fetchLink'
import './styles.css'

const index = (props) => {

  const highlightTitle = () => {
    props.setHighlighter(true)
    setTimeout(() => props.setHighlighter(false), 1000)
  }

  const copyLink = (link) => {
    navigator.clipboard.writeText(link)
    props.setCopied(true)
    setTimeout(() => props.setCopied(false), 700)
  }

  const formatShorty = (shorty) => {
    return shorty.replace('https://', '') 
  }

  return (
    <div className="form-container" > 
				<div className="form">

      <span className={props.highlighter ? "form-title-highlight" : "form-title"}>Enter A Loud Link Below</span>
					<span className="label">Loud Link</span>
          <input 
            className="link" 
            type="text" 
            id="longURL" 
            name="longURL" 
            onChange={(event) => props.setLongURL(event.target.value)}
            value={props.longURL} 
            placeholder="" 
          />
					<div className="submit-container">
						<div className="alias-container">
							<span className="label">Custom Slug</span>
							<input
								className="alias"
								type="text"
								id="alias"
                name="alias"
                onChange={(event) => props.setAlias(event.target.value)}
								value={props.alias}
								placeholder="(optional)"
							/>
						</div>
						<button id={props.longURL === '' ? "submit-off" : "submit"} onClick={props.longURL === "" ? () => highlightTitle() : () => fetchLink({address: props.longURL, alias: props.alias}, props.setShorty)}>MAKE IT SHY</button>
					</div>
          <div className="result-container">
            <span className={props.shorty === "SHY LINK WILL APPEAR HERE" ? "no-result" : "result"} onClick={props.shorty === "SHY LINK WILL APPEAR HERE" ? null : () => copyLink(props.shorty)}>{formatShorty(props.shorty)}
            <div className="result-button-container">
              <a className="result-button" href={props.shorty} target="_blank" rel="noopener noreferrer">Open</a>
              <span className={props.copied? "copied" : "not-copied"}>COPIED!</span>
              <a className="result-button" onClick={() => copyLink(props.shorty)} href={null}>Copy</a>
            </div>
            </span>
            
          </div>
				</div>
			</div>
  );
}

export default index;
